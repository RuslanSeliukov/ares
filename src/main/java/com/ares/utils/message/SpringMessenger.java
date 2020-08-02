package com.ares.utils.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Component("SpringMessenger")
public class SpringMessenger extends AbstractMessenger {

    @Value("${mail.debug}")
    private String mailDebug;
    @Value("${email.path.to.template}")
    private String pathToEmailTemplate;
    @Value("${email.order.subject}")
    private String subject;

    @Autowired
    private SpringTemplateEngine thymeleafTemplateEngine;

    @Override
    public boolean sendMessage(String to) {

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        this.configureProperties(mailSender.getJavaMailProperties());

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            Context thymeleafContext = new Context();
            thymeleafContext.setVariables(getMassageConstants());
            String htmlBody = thymeleafTemplateEngine.process(pathToEmailTemplate, thymeleafContext);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlBody, true);

            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    protected Properties configureProperties(Properties properties) {
        properties.put("mail.debug", mailDebug);
        return properties;
    }
}
