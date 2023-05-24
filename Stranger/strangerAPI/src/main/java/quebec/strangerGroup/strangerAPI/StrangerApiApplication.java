package quebec.strangerGroup.strangerAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import quebec.strangerGroup.strangerAPI.dao.DAO;
import quebec.strangerGroup.strangerAPI.models.Artist;
import quebec.strangerGroup.strangerAPI.models.Poster;
import quebec.strangerGroup.strangerAPI.services.PosterService;

import java.util.List;

@SpringBootApplication
public class StrangerApiApplication {



	public static void main(String[] args) {
		SpringApplication.run(StrangerApiApplication.class, args);
	}


}