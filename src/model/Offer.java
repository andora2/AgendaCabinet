package model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the "Offer" database table.
 * 
 */
@Entity
@Table(name=Offer.OFFER)
@NamedQuery(name="Offer.findAll", query="SELECT o FROM Offer o")
public class Offer implements Serializable {
	static final String OFFER = "Offer";

	private static final long serialVersionUID = 1L;

	@Column(name="\"amount\"")
	private Double amount;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="\"createDate\"")
	private Date createDate;

	@Column(name="\"Customer_idCustomer\"")
	private Long customer_idCustomer;

	@Column(name="\"details\"")
	private String details;

	@Id
	@Column(name="\"idOffer\"")
	private Long idOffer;

	@ManyToOne
    @JoinColumn(name="\"Customer_idCustomer\"")
    private Customer customer;
	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		//this.customer = customer;
		this.setCustomer_idCustomer(customer.getIdCustomer());
	}

	public Offer() {
	}

	public Double getAmount() {
		return this.amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getCustomer_idCustomer() {
		return this.customer_idCustomer;
	}

	public void setCustomer_idCustomer(Long customer_idCustomer) {
		this.customer_idCustomer = customer_idCustomer;
	}

	public String getDetails() {
		return this.details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Long getIdOffer() {
		return this.idOffer;
	}

	public void setIdOffer(Long idOffer) {
		this.idOffer = idOffer;
	}

}