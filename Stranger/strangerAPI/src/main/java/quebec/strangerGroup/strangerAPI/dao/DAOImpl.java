package quebec.strangerGroup.strangerAPI.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import quebec.strangerGroup.strangerAPI.models.Artist;
import quebec.strangerGroup.strangerAPI.models.Order;
import quebec.strangerGroup.strangerAPI.models.Poster;
import quebec.strangerGroup.strangerAPI.models.User;

import java.util.List;

@Repository
public class DAOImpl implements DAO{


    private EntityManager entityManager;

    @Autowired
    public  DAOImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }


    @Override
    @Transactional
    public void saveArtist(Artist theArtist) {
        entityManager.persist(theArtist);
    }

    @Override
    @Transactional
    public void saveOrder(Order theOrder) {
        entityManager.persist(theOrder);
    }

    @Override
    @Transactional
    public void savePoster(Poster thePoster) {
        entityManager.persist(thePoster);
    }

    @Override
    @Transactional
    public void saveUser(User theUser) {
        entityManager.persist(theUser);
    }

    @Override
    public Artist findArtist(int id) {
        return entityManager.find(Artist.class, id);
    }

    @Override
    public Order findOrder(int id) {
        return entityManager.find(Order.class,id);
    }

    @Override
    public Poster findPoster(int id) {
        return entityManager.find(Poster.class,id);
    }

    @Override
    public User findUser(int id) {
        return entityManager.find(User.class,id);
    }

    @Override
    @Transactional
    public void updateArtist(Artist theArtist) {
        entityManager.merge(theArtist);
    }

    @Override
    @Transactional
    public void updateOrder(Order theOrder) {
        entityManager.merge(theOrder);
    }

    @Override
    @Transactional
    public void updatePoster(Poster thePoster) {
        entityManager.merge(thePoster);
    }

    @Override
    @Transactional
    public void updateUser(User theUser) {
        entityManager.merge(theUser);
    }

    @Override
    @Transactional
    public void deleteArtist(int id) {
        Artist artist = findArtist(id);

        entityManager.remove(artist);
    }

    @Override
    @Transactional
    public void deleteOrder(int id) {
        Order order = findOrder(id);

        entityManager.remove(order);

    }

    @Override
    @Transactional
    public void deletePoster(int id) {
        Poster poster = findPoster(id);

        entityManager.remove(poster);
    }

    @Override
    @Transactional
    public void deleteUser(int id) {
        User user = findUser(id);

        entityManager.remove(user);

    }

    @Override
    public List<Artist> getAllArtists() {
        TypedQuery<Artist> theQuery = entityManager.createQuery("FROM artists" ,Artist.class);
        return theQuery.getResultList();
    }

    @Override
    public List<Order> getAllOrders() {
        TypedQuery<Order> theQuery = entityManager.createQuery("FROM orders" ,Order.class);
        return theQuery.getResultList();
    }

    @Override
    public List<Poster> getAllPosters() {
        TypedQuery<Poster> theQuery = entityManager.createQuery("FROM Poster" ,Poster.class);
        return theQuery.getResultList();
    }

    @Override
    public List<User> getAllUsers() {
        TypedQuery<User> theQuery = entityManager.createQuery("FROM users" ,User.class);
        return theQuery.getResultList();
    }
}
