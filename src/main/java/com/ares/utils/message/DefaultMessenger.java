package com.ares.utils.message;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Component("DefaultMessenger")
public class DefaultMessenger extends AbstractMessenger {

    @Value("${authentication.data.username}")
    private String smtpUsername;
    @Value("${authentication.data.password}")
    private String smtpPassword;
    @Value("${email.order.subject}")
    private String subject;

    @Override
    public boolean sendMessage(String to) {
        try {
            MimeMessage message = new MimeMessage(configureSession(super.configureProperties(System.getProperties())));
            message.setFrom(new InternetAddress(smtpUsername));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(subject);
            message.setText("We are working on your order!");

            Transport.send(message);
            return true;
        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }
    }

    private Session configureSession(Properties properties) {
        return Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(smtpUsername, smtpPassword);
            }
        });
    }
}
