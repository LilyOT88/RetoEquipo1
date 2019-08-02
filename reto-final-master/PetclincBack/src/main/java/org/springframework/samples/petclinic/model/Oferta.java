package org.springframework.samples.petclinic.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ofertas")
public class Oferta {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "discount")
	private double discount;
	
	@Column(name = "expireDate")
	private Date expireDate;
	
	public Oferta() {
		
	}
	
	public Oferta(String title, String description, double discount, Date expireDate) {
		super();
		this.title = title;
		this.description = description;
		this.discount= discount;
		this.expireDate = expireDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDiscount() {
		return description;
	}
	
	public void setDiscount(double discount) {
		this.discount = discount;
	}

	

}


