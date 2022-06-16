<template>
  <SfModal
    v-e2e="'login-modal'"
    :visible="isLoginModalOpen"
    class="modal"
    @close="closeModal"
  >
    <template #modal-bar>
      <SfBar
        class="sf-modal__bar smartphone-only"
        :close="true"
        :title="$t(barTitle)"
        @click:close="closeModal"
      />
    </template>
    <transition name="sf-fade" mode="out-in">
      <div v-if="currentScreen === SCREEN_LOGIN">
        <ValidationObserver v-slot="{ handleSubmit }" key="log-in">
          <form class="form" @submit.prevent="handleSubmit(handleLogin)">
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-email'"
                v-model="form.username"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="email"
                label="Your email"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors }">
              <SfInput
                v-e2e="'login-modal-password'"
                v-model="form.password"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="password"
                label="Password"
                type="password"
                class="form__element"
              />
            </ValidationProvider>
            <SfCheckbox
              v-e2e="'login-modal-remember-me'"
              v-model="rememberMe"
              name="remember-me"
              label="Remember me"
              class="form__element checkbox"
            />
            <div v-if="error.login">
              {{ $t('loginErrors.' + error.login || 'There has been an error. Please try again.') }}
            </div>
            <SfButton v-e2e="'login-modal-submit'"
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="loading"
            >
              <SfLoader :class="{ loader: loading }" :loading="loading">
                <div>{{ $t('Login') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>
        <div class="action">
          <SfButton class="sf-button--text" @click="setCurrentScreen(SCREEN_FORGOTTEN)">
            {{ $t('Forgotten password?') }}
          </SfButton>
        </div>
        <div class="bottom">
          <p class="bottom__paragraph">{{ $t('No account') }}</p>
          <SfButton class="sf-button--text" @click="setCurrentScreen(SCREEN_REGISTER)">
            {{ $t('Register today') }}
          </SfButton>
        </div>
      </div>
      <div v-else-if="currentScreen === SCREEN_FORGOTTEN">
        <p>{{ $t('Forgot Password') }}</p>
        <ValidationObserver v-slot="{ handleSubmit }" key="log-in">
          <form class="form" @submit.prevent="handleSubmit(handleForgotten)">
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <SfInput
                v-e2e="'forgot-modal-email'"
                v-model="form.username"
                :valid="!errors[0]"
                :errorMessage="errors[0]"
                name="email"
                :label="$t('Forgot Password Modal Email')"
                class="form__element"
              />
            </ValidationProvider>
            <div v-if="forgotPasswordError.request">
              {{ forgotPasswordError.request.message }}
            </div>
            <SfButton
              v-e2e="'forgot-modal-submit'"
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="forgotPasswordLoading"
            >
              <SfLoader :class="{ loader: forgotPasswordLoading }" :loading="forgotPasswordLoading">
                <div>{{ $t('Reset Password') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>
      </div>
      <div v-else-if="currentScreen === SCREEN_THANK_YOU" class="thank-you">
        <i18n tag="p" class="thank-you__paragraph" path="forgotPasswordConfirmation">
          <span class="thank-you__paragraph--bold">{{ userEmail }}</span>
        </i18n>
        <p class="thank-you__paragraph">{{ $t('Thank You Inbox') }}</p>
      </div>
      <div v-else class="form">
        <ValidationObserver v-slot="{ handleSubmit }" key="sign-up">
          <form class="form" @submit.prevent="handleSubmit(handleRegister)" autocomplete="off">
            <template v-for="(field, idx) in fields" >
              <div :key="idx" v-if="['TEXT', 'EMAIL', 'PASSWORD', 'PHONE_NUMBER', 'DATE'].includes(field.type)">
                <ValidationProvider
                  :rules="convertValidators(field.validators)"
                  :name="field.name"
                  v-slot="{ errors }"
                >
                  <SfInput
                    v-model="form[field.name]"
                    :type="getInputType(field.type)"
                    :valid="!errors[0]"
                    :errorMessage="errors[0]"
                    :name="field.name"
                    :label="$t('form.fieldNames.' + field.name)"
                    class="form__element"
                    :required="field.required"
                    :disabled="field.disabled"
                    :hasShowPassword="field.type === 'PASSWORD'"
                  />
                </ValidationProvider>
                <ValidationProvider v-if="field.confirmable" :rules="`CONFIRMATION:@${field.name}`" v-slot="{ errors }">
                  <SfInput
                    type="getInputType(field.type)"
                    v-model="form[field.name + '__confirmation']"
                    :valid="!errors[0]"
                    :errorMessage="errors[0]"
                    :name="field.name + '__confirmation'"
                    :label="'Confirm ' + $t('form.fieldNames.' + field.name)"
                    class="form__element"
                    :required="field.required"
                    :disabled="field.disabled"
                    :hasShowPassword="field.type === 'PASSWORD'"
                  />
                </ValidationProvider>
              </div>
              <ValidationProvider
                v-else-if="field.type === 'BOOLEAN'"
                :key="idx"
                :rules="convertValidators(field.validators)"
                v-slot="{ errors }"
              >
                <SfCheckbox
                  v-model="form[field.name]"
                  :valid="!errors[0]"
                  :errorMessage="errors[0]"
                  :name="$t('form.fieldNames.' + field.name)"
                  :label="field.name"
                  class="form__element"
                />
              </ValidationProvider>
              <ValidationProvider
                v-else-if="['MARKETING_CONSENT', 'GROUP'].includes(field.type)"
                :key="idx"
                :rules="convertValidators(field.validators)"
                v-slot="{ errors }"
              >
                <span class="sf-input__label" style="position: relative;">{{ $t('form.fieldNames.' + field.name) }}</span>
                <SfRadio
                  v-for="(option, i) in field.answerOptions"
                  :key="i"
                  v-model="form[field.name]"
                  :value="option.optionKey"
                  :valid="!errors[0]"
                  :errorMessage="errors[0]"
                  :name="field.name"
                  :label="$t('form.marketingConsent.' + option.optionKey)"
                  class="form__element"
                />
              </ValidationProvider>
            </template>
            <div v-if="error.register">
              {{ error.register }}
            </div>
            <SfButton
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="loading"
            >
              <SfLoader :class="{ loader: loading }" :loading="loading">
                <div>{{ $t('Create an account') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>
        <div class="action">
          {{ $t('or') }}
          <SfButton class="sf-button--text" @click="setCurrentScreen(SCREEN_LOGIN)">
            {{ $t('login in to your account') }}
          </SfButton>
        </div>
      </div>
    </transition>
  </SfModal>
</template>
<script>
import { ref, watch, reactive, computed, onMounted, useRoute } from '@nuxtjs/composition-api';
import { SfModal, SfInput, SfButton, SfCheckbox, SfLoader, SfAlert, SfBar, SfRadio } from '@storefront-ui/vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { useUser, useForgotPassword, useForm } from '@vue-storefront/horizon';
import { useUiState, useUiHelpers } from '~/composables';
export default {
  name: 'LoginModal',
  components: {
    SfModal,
    SfInput,
    SfRadio,
    SfButton,
    SfCheckbox,
    SfLoader,
    SfAlert,
    ValidationProvider,
    ValidationObserver,
    SfBar
  },
  setup() {
    const SCREEN_LOGIN = 'login';
    const SCREEN_REGISTER = 'register';
    const SCREEN_THANK_YOU = 'thankYouAfterForgotten';
    const SCREEN_FORGOTTEN = 'forgottenPassword';

    const { isLoginModalOpen, toggleLoginModal } = useUiState();
    const { convertValidators } = useUiHelpers();
    const route = useRoute();
    const userEmail = ref('');
    const form = ref({});
    const createAccount = ref(false);
    const rememberMe = ref(false);
    const { form: fields, search: getForm, loading: formLoading } = useForm();
    const { register, login, loading, error: userError } = useUser();
    const { request, error: forgotPasswordError, loading: forgotPasswordLoading } = useForgotPassword();
    const currentScreen = ref(SCREEN_REGISTER);

    const error = reactive({
      login: null,
      register: null
    });

    const resetErrorValues = () => {
      error.login = null;
      error.register = null;
    };

    const barTitle = computed(() => {
      switch (currentScreen.value) {
        case SCREEN_LOGIN:
          return 'Sign in';
        case SCREEN_REGISTER:
          return 'Register';
        default:
          return 'Reset Password';
      }
    });

    watch(isLoginModalOpen, () => {
      if (isLoginModalOpen) {
        form.value = {};
        resetErrorValues();
      }
    });

    const setCurrentScreen = (screenName) => {
      resetErrorValues();
      currentScreen.value = screenName;
    };

    const handleForm = (fn) => async () => {
      resetErrorValues();
      const filteredForm = form.value;
      Object.keys(form.value).forEach(key => {
        key.includes('__confirmation') && delete filteredForm[key];
      });
      if (filteredForm.marketingConsent) {
        filteredForm.marketingConsentAuditData = {
          messageShown: 'form.marketingConsent.' + filteredForm.marketingConsent,
          formIdentifier: 'register modal',
          formLocation: route.value.path
        };
      }
      await fn({ user: filteredForm });
      const hasUserErrors = userError.value.register || userError.value.login;
      if (hasUserErrors) {
        error.login = userError.value.login?.error || userError.value.login?.errors[0].message;
        error.register = userError.value.register?.error;
        return;
      }
      toggleLoginModal();
    };

    const closeModal = () => {
      resetErrorValues();
      setCurrentScreen(SCREEN_LOGIN);
      toggleLoginModal();
    };

    const handleRegister = async () => handleForm(register)();

    const handleLogin = async () => handleForm(login)();

    onMounted(async () => {
      await getForm({
        type: 'register'
      });
    });

    const handleForgotten = async () => {
      userEmail.value = form.value.username;
      await request({ email: userEmail.value });

      if (!forgotPasswordError.value.request) {
        setCurrentScreen(SCREEN_THANK_YOU);
      }
    };

    return {
      form,
      fields,
      error,
      userError,
      loading,
      createAccount,
      rememberMe,
      isLoginModalOpen,
      toggleLoginModal,
      handleLogin,
      handleRegister,
      forgotPasswordError,
      forgotPasswordLoading,
      handleForgotten,
      closeModal,
      userEmail,
      barTitle,
      currentScreen,
      setCurrentScreen,
      convertValidators,
      SCREEN_LOGIN,
      SCREEN_REGISTER,
      SCREEN_THANK_YOU,
      SCREEN_FORGOTTEN
    };
  },
  methods: {
    getInputType (type) {
      switch (type) {
        case 'TEXT' || 'EMAIL':
          return 'text';
        case 'PASSWORD':
          return 'password';
        case 'NUMBER' || 'PHONE_NUMBER':
          return 'number';
        case 'DATE':
          return 'date';
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.modal {
  --modal-index: 3;
  --overlay-z-index: 3;
}
.form {
  margin-top: var(--spacer-sm);
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
  }
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
  font: var(--font-weight--light) var(--font-size--base) / 1.6 var(--font-family--secondary);
  & > * {
    margin: 0 0 0 var(--spacer-xs);
  }
}
.action {
  margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
}
.checkbox {
  margin-bottom: var(--spacer-2xl);
}
.bottom {
  text-align: center;
  margin-bottom: var(--spacer-lg);
  font-size: var(--h3-font-size);
  font-weight: var(--font-weight--semibold);
  font-family: var(--font-family--secondary);
  &__paragraph {
    color: var(--c-primary);
    margin: 0 0 var(--spacer-base) 0;
    @include for-desktop {
      margin: 0;
    }
  }
}
.thank-you {
  &__paragraph {
    &--bold {
      font-weight: var(--font-weight--semibold);
    }
  }
}
</style>
