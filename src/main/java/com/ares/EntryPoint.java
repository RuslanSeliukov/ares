package com.ares;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EntryPoint {

  @RequestMapping(value = {"/", "admin/**", "/login", "/BookInfo/**", "/cart"}, method = RequestMethod.GET)
  public String index() {
    return "index";
  }
}
