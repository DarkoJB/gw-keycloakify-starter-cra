// ejected using 'npx eject-keycloak-page'
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
export default function Register(
  props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n>
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  });

  const {
    url,
    messagesPerField,
    register,
    realm,
    passwordRequired,
    recaptchaRequired,
    recaptchaSiteKey,
  } = kcContext;

  const { msg, msgStr } = i18n;

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      headerNode={<div className="loginTitle">{msg("registerTitle")}</div>}      
    >
      <form
        id="kc-register-form"
        className={getClassName("kcFormClass")}
        action={url.registrationAction}
        method="post"
      >
        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "firstName",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <div className={getClassName("kcInputWrapperClass")}>
            <input
              placeholder="First name"
              type="text"
              id="firstName"
              className={`${getClassName("kcInputClass")} inputField`}
              name="firstName"
              defaultValue={register.formData.firstName ?? ""}
            />
          </div>
        </div>

        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "lastName",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <div className={getClassName("kcInputWrapperClass")}>
            <input
              placeholder="Last name"
              type="text"
              id="lastName"
              className={`${getClassName("kcInputClass")} inputField`}
              name="lastName"
              defaultValue={register.formData.lastName ?? ""}
            />
          </div>
        </div>
        <div
          className={clsx(
            getClassName("kcFormGroupClass"),
            messagesPerField.printIfExists(
              "email",
              getClassName("kcFormGroupErrorClass")
            )
          )}
        >
          <div className={getClassName("kcInputWrapperClass")}>
            <input
              placeholder="Email"
              type="text"
              id="email"
              className={`${getClassName("kcInputClass")} inputField`}
              name="email"
              defaultValue={register.formData.email ?? ""}
              autoComplete="email"
            />
          </div>
        </div>
        {!realm.registrationEmailAsUsername && (
          <div
            className={clsx(
              getClassName("kcFormGroupClass"),
              messagesPerField.printIfExists(
                "username",
                getClassName("kcFormGroupErrorClass")
              )
            )}
          >
            <div className={getClassName("kcInputWrapperClass")}>
              <input
                placeholder="Username"
                type="text"
                id="username"
                className={`${getClassName("kcInputClass")} inputField`}
                name="username"
                defaultValue={register.formData.username ?? ""}
                autoComplete="username"
              />
            </div>
          </div>
        )}
        {passwordRequired && (
          <>
            <div
              className={clsx(
                getClassName("kcFormGroupClass"),
                messagesPerField.printIfExists(
                  "password",
                  getClassName("kcFormGroupErrorClass")
                )
              )}
            >
              <div className={getClassName("kcInputWrapperClass")}>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  className={`${getClassName("kcInputClass")} inputField`}
                  name="password"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div
              className={clsx(
                getClassName("kcFormGroupClass"),
                messagesPerField.printIfExists(
                  "password-confirm",
                  getClassName("kcFormGroupErrorClass")
                )
              )}
            >
              <div className={getClassName("kcInputWrapperClass")}>
                <input
                  placeholder="Confirm password"
                  type="password"
                  id="password-confirm"
                  className={`${getClassName("kcInputClass")} inputField`}
                  name="password-confirm"
                />
              </div>
            </div>
          </>
        )}
        {recaptchaRequired && (
          <div className="form-group">
            <div className={getClassName("kcInputWrapperClass")}>
              <div
                className="g-recaptcha"
                data-size="compact"
                data-sitekey={recaptchaSiteKey}
              ></div>
            </div>
          </div>
        )}
        <div className={getClassName("kcFormGroupClass")}>
          <div
            id="kc-form-options"
            className={getClassName("kcFormOptionsClass")}
          >
            <div className={getClassName("kcFormOptionsWrapperClass")}>
              <span>
                <a className="backToLogin" href={url.loginUrl}>{msg("backToLogin")}</a>
              </span>
            </div>
          </div>

          <div
            id="kc-form-buttons"
            className={getClassName("kcFormButtonsClass")}
          >
            <input
              className={clsx("submitButton", 'customSubmitButton')}
              type="submit"
              value={msgStr("doRegister")}
            />
          </div>
        </div>
      </form>
    </Template>
  );
}
