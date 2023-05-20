package quebec.strangerGroup.strangerAPI.models;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    //Properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "order_size")
    private int orderSize;

    @ManyToOne
    @JoinColumn(name = "UserId" , nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "PosterId" , nullable = false)
    private Poster poster;

    @Column(name = "orderDate")
    private String orderDate;

    // Constructors
    public Order() {}
    public Order(int orderSize, User user, Poster poster,String orderDate) {
        this.orderSize = orderSize;
        this.orderDate = orderDate;
        this.poster = poster;
        this.user = user;
    }

    //Getters/Setters
    public int getId() {
        return id;
    }

    public int getOrderSize() {
        return orderSize;
    }

    public void setOrderSize(int orderSize) {
        this.orderSize = orderSize;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public User getUser() {
        return user;
    }

    public Poster getPoster() {
        return poster;
    }

    // Methods
    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", orderSize=" + orderSize +
                ", user=" + user +
                ", poster=" + poster +
                ", orderDate='" + orderDate + '\'' +
                '}';
    }
}
