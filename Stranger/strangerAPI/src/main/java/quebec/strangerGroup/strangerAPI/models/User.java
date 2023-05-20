package quebec.strangerGroup.strangerAPI.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    // Properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "user_password")
    private String password;

    @Column(name = "user_email")
    private String email;

    @Column(name = "address")
    private String addr;

    @Column(name = "pic")
    private String pic;

    @OneToMany(mappedBy = "user")
    private Set<Order> orders;


    // Constructors
    public User() {}

    public User(String username, String password, String email, String addr, String pic) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.addr = addr;
        this.pic = pic;
    }


    // Getter/Setter
    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    // Methods
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", addr='" + addr + '\'' +
                ", pic='" + pic + '\'' +
                ", orders=" + orders +
                '}';
    }
}
