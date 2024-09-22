---
title: 'Weekly learning review - Securing cookies'
date: 2024-09-22 21:15:00
---

This week's progress:

- Wanted to learn more about security
  - Motivation:
    - embarrassingly, I got asked about security in an interview, and I completely bombed the question - probably was a bit too honest saying "I did an OWASP Top 10 course, but can't remember anything from it"
    - How do we handle outdated packages and keep up to date, especially when using `pnpm audit` and using 3rd party JS libraries when building applications?
    - What to look out for that we don't know about now?
- 50% through Steve Kinney's Web Security course on FrontEnd Masters
  (we take security too much for granted and often deprioritize security over features all the time when they should be incorporate during feature work - but at times, it's true - you never know until you know, or you're pushing an urgent fix without realising)

### What are web / browser cookies?

- _small piece of data that server sends to a user's web browser - MDN_
- In some cases, we may store authentication or session details in a cookie (such as username, and a session id)
- Stateless

### Ways to make a cookie that tracks a user session secure:

- Encrypt with a secret and unique token on the BE before sending it across to the browser (so that it's not plain text)
- Encrypt secret with signed unique sessions in the cookie
- Ensure cookies have expiration (via `Expires` or `Max-Age`) such that the cookie gets deleted after a certain period of time
- ensure that the cookie can only be verified and updated via `http` only, and ensure it is signed and secured over a connection (prevent use of `document.cookie` to change or update it)
- Ensure that the session ID correlates to the correct user
- We can ensure that the cookie can only be used on the same origin via the same origin policy
  > Same origin policy: a browser securty feature that restricts how documents and scripts on 1 origin can interact with resources on another origin - web.dev
      - Origin = protocol + host + port (e.g. http(s):// + domain-name.com + :443 )
- If we want to allow sending or receiving data from other origins, this is where CORS policy is defined and used, proxies, or web sockets
- Ensure that all inputs and outputs that are going to be used in SQL updates / JS / command injections are sanitized and escaped (using `?` is your best friend)
- Avoid using `eval` / `Function` / `exec` or other potentially dangerous JS functions that allows parsing of scripts
- Have logging to ensure all requests that come through are logged and can be tracked (via cookies or authentication or if someone's doing dodgy, at least we have logs for how they've managed to exploit it if it becomes a problem, or even prevent it if they are trying to get in)
- Use the rule of least privilege principle and apply that to your code where we restrict exactly what is allowed and what's not

Example:

```
// allows everything from req.body, which could include other fields where extra malicious data could be added
const params = req.body;
...

// more safer (getting exactly what's required)
const { name, email, address } = req.body;

...

```

- Consider using the `SameSite` attribute to restrict access of cookie in the same domain
  - Site is NOT the same as origin - site is the protocol + last part of domain name
  - `None` - always sends cookie, but must be HTTPS
  - `Lax` - allows cookie to be sent to top-level navigation and if request method is `GET` or `HEAD` requests
    - Top level navigation: any action where user initiates change in URL by entering URL in address bar, selecting bookmark, clicking link that leads to another page (not ajax / iframes)
  - `Strict` - only include cookie if request is sent from the same site that sent the cookie
    (Note that there are some situations where you may need to use )

### Common attacks:

- **XSS (Cross site scripting)** - malicious script is injected via input fields or URLs where cookies allow the access of these scripts to run which then sends information back to the attacker (or do something unintended)
- **Session hijacking** (using active sessions to gain unauthorized access - ensure your cookies are secure and encrypted, signed and assigned to a session ID)
- **CSRF** (Cross-site request forgery - forces user to executed unwanted actions on web application in which they are currently authenticated, attacker tricks user to execute actions or submit a malicious request)
  - an example of this is loading a background url image via CSS which pings a GET request which actually does something such as updating posts, or transfering data into an account maliciously (and the user would have no idea, cause the image looks harmless)
  - This can be prevented using same-origin policy or CORS policy restrictions on top of `SameSite` attribute
- **Injection** (attacker sends malicious inputs to application in hopes of breaking out and causing damage - SQL injection, command injection, remote injection)
  - one of the OWASP Top 10
    - > Standard awareness document for developers and web application securit (most critical security risks to web applications) - OWASP
  - prevent this by sanitizing and escaping all inputs, and avoid doing it where possible
  - Avoid using `eval` / `Function` / `exec` functions that run scripts programmatically

### References

- Steve Kinney's [Web Security](https://frontendmasters.com/courses/web-security-v2/) course on FrontEnd Masters
- [HTTP Cookie - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Same origin policy - web.dev](https://web.dev/articles/same-origin-policy#:~:text=The%20same%2Dorigin%20policy%20is,from%20multiple%20sites%20at%20once.)
- ["Same-site" and "same-origin" - web.dev](https://web.dev/articles/same-site-same-origin)
- [OWASP Top 10 - OWASP](https://owasp.org/www-project-top-ten/)
- [Cross Site Scripting (XSS) - OWASP](https://owasp.org/www-community/attacks/xss/)
- [Session hijacking attack - OWASP](https://owasp.org/www-community/attacks/Session_hijacking_attack)
- [Cross Site Request Forgery (CSRF) - OWASP](https://owasp.org/www-community/attacks/csrf)
- [A03:2021 - Injection - OWASP](https://owasp.org/Top10/A03_2021-Injection/)
