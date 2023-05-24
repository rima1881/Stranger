package quebec.strangerGroup.strangerAPI.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="artists")
public class Artist {

    // Properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "artist_name")
    private String name;

    @Column(name = "artist_password")
    private String password;

    @Column(name = "pic")
    private  String pic;

    @Column(name = "artist_email")
    private String artistEmail;

    @JsonIgnore
    @OneToMany(mappedBy = "artist",orphanRemoval = true)
    private Set<Poster> posters;



    // Constructors
    public Artist() {}

    public Artist(String name, String password, String pic, String email) {
        this.name = name;
        this.password = password;
        this.pic = pic;
        this.artistEmail = email;
    }


    // Getters/Setters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getEmail() {
        return artistEmail;
    }

    public void setEmail(String email) {
        this.artistEmail = email;
    }

    public Set<Poster> getPosters(){ return this.posters;}

    // Methods

    @Override
    public String toString() {
        return "Artist{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", pic='" + pic + '\'' +
                ", email='" + artistEmail + '\'' +
                ", posters=" + posters +
                '}';
    }

}
