package quebec.strangerGroup.strangerAPI.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/")
    public String helloWorld(){
        return "Hello world";
    }
}
