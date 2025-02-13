import smtplib
from email.mime.text import MIMEText

# Configuración del servidor SMTP
SMTP_HOST = 'mail.centraalinning.com'
SMTP_PORT = 587
SMTP_USER = 'no-reply@centraalinning.com'
SMTP_PASS = 'T4tt9xFscgUhM5AEdQ85'
SMTP_SECURE = False

# Crear el mensaje
msg = MIMEText('Este es un correo de prueba.')
msg['Subject'] = 'Prueba de envío de correo'
msg['From'] = SMTP_USER
msg['To'] = 'jwnavarretez@gmail.com'

try:
    # Conectar al servidor SMTP
    if SMTP_SECURE:
        server = smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT)
    else:
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()

    # Iniciar sesión en el servidor SMTP
    server.login(SMTP_USER, SMTP_PASS)

    # Enviar el correo
    server.sendmail(SMTP_USER, ['jwnavarretez@gmail.com'], msg.as_string())

    print('Correo enviado exitosamente.')

except Exception as e:
    print(f'Error al enviar el correo: {e}')

finally:
    server.quit()