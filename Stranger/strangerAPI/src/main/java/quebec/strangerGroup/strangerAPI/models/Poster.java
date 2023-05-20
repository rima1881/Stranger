package quebec.strangerGroup.strangerAPI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "posters")
public class Poster {

    // Properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "poster_name")
    private String name;

    @Column(name = "pic")
    private String pic;

    @Column(name = "poster_size")
    private String size;

    @Column(name = "ratio")
    private String ratio;

    @Column(name = "price")
    private int price;


    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "artist_id" , nullable = false)
    private Artist artist;


    // Constructors
    public Poster() {}

    public Poster(String name, String pic, String size, String ratio, int price, Artist artist) {
        this.name = name;
        this.pic = pic;
        this.size = size;
        this.ratio = ratio;
        this.price = price;
        this.artist = artist;
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

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getRatio() {
        return ratio;
    }

    public void setRatio(String ratio) {
        this.ratio = ratio;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Artist getArtist() { return artist;}


    // Methods
    @Override
    public String toString() {
        return "Poster{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", pic='" + pic + '\'' +
                ", size='" + size + '\'' +
                ", ratio='" + ratio + '\'' +
                ", price=" + price +
                ", artist=" + artist +
                '}';
    }
}
