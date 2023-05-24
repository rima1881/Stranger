package quebec.strangerGroup.strangerAPI.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import quebec.strangerGroup.strangerAPI.models.Poster;
import quebec.strangerGroup.strangerAPI.services.PosterService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/posters")
public class PosterController {

    private PosterService posterService;

    @Autowired
    PosterController(PosterService thePosterService){
        posterService = thePosterService;
    }

    @GetMapping("")
    public List<Poster> GetAll(){
        return posterService.getAll();
    }

}