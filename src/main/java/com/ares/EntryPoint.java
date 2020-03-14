package com.ares;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EntryPoint {

  @RequestMapping(value = "/")
  public String index() {
    return "index";
  }
}
