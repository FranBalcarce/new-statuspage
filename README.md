Segun chatgpt lo que genera el problema de redireccion al localhost:3000 despues de haberse logueado, es el https.
Estos son los pasos que me dice:
https://localhost:3000
🔒 Ese esquema https:// requiere un certificado SSL, que localhost no tiene por defecto.

✅ Lo que tenés que hacer: (esto seria lo que hizo darpa el otro dia en cognito)
1. Cambiá la redirección en Cognito a HTTP (no HTTPS)
Ingresá a la consola de Amazon Cognito y hacé lo siguiente:

Andá a tu User Pool

Elegí App client settings

En Callback URL(s) poné:
http://localhost:3000

En Sign out URLs, también poné:
http://localhost:3000

Y despues en nuestro codigo cambiar el https por http. 
