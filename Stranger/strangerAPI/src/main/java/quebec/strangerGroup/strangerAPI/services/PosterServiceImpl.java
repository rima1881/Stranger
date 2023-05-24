package quebec.strangerGroup.strangerAPI.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quebec.strangerGroup.strangerAPI.dao.DAO;
import quebec.strangerGroup.strangerAPI.models.Poster;

import java.util.List;

@Service

public class PosterServiceImpl implements PosterService{

    private DAO dao;

    @Autowired
    PosterServiceImpl(DAO thedao){
        dao = thedao;
    }

    @Override
    public List<Poster> getAll() {
        return dao.getAllPosters();
    }
}
