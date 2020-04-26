package com.ares.rest;

import com.ares.configuration.services.MyUserDetailsService;
import com.ares.models.AuthenticationRequest;
import com.ares.models.JwtJsonModel;
import com.ares.models.ValidateTokenResponse;
import com.ares.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.util.StringUtils;

@RestController
@RequestMapping("/api")
public class SecurityManager {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private MyUserDetailsService userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createJwtToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtJsonModel(jwt));

    }

    @RequestMapping(value = "/validateToken", method = RequestMethod.POST)
    public ResponseEntity<?> validateJwtToken(@RequestBody JwtJsonModel jwtModel) {

        final String jwt = jwtModel.getJwt();

        if (!StringUtils.isEmpty(jwt)) {
            String username = jwtUtil.extractUsername(jwt);
            if (!StringUtils.isEmpty(username)) {
                UserDetails userDetails = this.myUserDetailsService.loadUserByUsername(username);
                if (jwtUtil.validateToken(jwt, userDetails)) {
                    return ResponseEntity.ok(new ValidateTokenResponse(Boolean.TRUE));
                }
            }
        }

        return ResponseEntity.ok(new ValidateTokenResponse(Boolean.FALSE));
    }
}
