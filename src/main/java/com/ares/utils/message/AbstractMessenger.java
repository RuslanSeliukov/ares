package com.ares.utils.message;

import org.springframework.beans.factory.annotation.Value;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public abstract class AbstractMessenger implements Messenger {

    @Value("${mail.smtp.host}")
    private String smtpHost;
    @Value("${mail.smtp.port}")
    private String smtpPort;
    @Value("${mail.smtp.ssl.enable}")
    private String smtpSslEnable;
    @Value("${mail.smtp.auth}")
    private String smtpAuth;

    private Map<String, Object> massageConstants = new HashMap<>();

    protected Properties configureProperties(Properties properties) {
        properties.put("mail.smtp.host", smtpHost);
        properties.put("mail.smtp.port", smtpPort);
        properties.put("mail.smtp.ssl.enable", smtpSslEnable);
        properties.put("mail.smtp.auth", smtpAuth);
        return properties;
    }

    public Map<String, Object> getMassageConstants() {
        return massageConstants;
    }

    public void setMassageConstants(Map<String, Object> massageConstants) {
        this.massageConstants = massageConstants;
    }

}
