package model;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the "Termin" database table.
 * 
 */
@Entity
@Table(name=Termin.TERMIN)
@NamedQuery(name="Termin.findAll", query="SELECT t FROM Termin t")
public class Termin implements Serializable {
	static final String TERMIN = "Termin";

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="plannedTime")
	private Timestamp plannedTime;

	@Column(name="cancelationType")
	private String cancelationType;

	//@Column(name="Customer_idCustomer")
	//private Long customer_idCustomer;

	@Column(name="finishTime")
	private Timestamp finishTime;

//	@Column(name="Offer_idOffer")
//	private Long offer_idOffer;

	@Column(name="payment")
	private Double payment;

	@Column(name="realTime")
	private Timestamp realTime;

//	@Column(name="WorkType_idWorkType")
//	private Long workType_idWorkType;

	@ManyToOne
    @JoinColumn(name="Customer_idCustomer")
    private Customer customer;
	
	@ManyToOne
    @JoinColumn(name="WorkType_idWorkType")
    private WorkType worktype;
	
	@ManyToOne
    @JoinColumn(name="Offer_idOffer")
    private Offer offer;

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Termin() {
	}

	public WorkType getWorkType() {
		return worktype;
	}

	public void setWorkType(WorkType worktype) {
		this.worktype = worktype;
	}
	
	public Offer getOffer() {
		return offer;
	}

	public void setOffer(Offer offer) {
		this.offer = offer;
	}

	public String getCancelationType() {
		return this.cancelationType;
	}

	public void setCancelationType(String cancelationType) {
		this.cancelationType = cancelationType;
	}

	/*public Long getCustomer_idCustomer() {
		return this.customer_idCustomer;
	}

	public void setCustomer_idCustomer(Long customer_idCustomer) {
		this.customer_idCustomer = customer_idCustomer;
	}*/

	public Timestamp getFinishTime() {
		return this.finishTime;
	}

	public void setFinishTime(Timestamp finishTime) {
		this.finishTime = finishTime;
	}

//	public Long getOffer_idOffer() {
//		return this.offer_idOffer;
//	}
//
//	public void setOffer_idOffer(Long offer_idOffer) {
//		this.offer_idOffer = offer_idOffer;
//	}

	public Double getPayment() {
		return this.payment;
	}

	public void setPayment(Double payment) {
		this.payment = payment;
	}

	public Timestamp getPlannedTime() {
		return this.plannedTime;
	}

	public void setPlannedTime(Timestamp plannedTime) {
		this.plannedTime = plannedTime;
	}

	public Timestamp getRealTime() {
		return this.realTime;
	}

	public void setRealTime(Timestamp realTime) {
		this.realTime = realTime;
	}

//	public Long getWorkType_idWorkType() {
//		return this.workType_idWorkType;
//	}
//
//	public void setWorkType_idWorkType(Long workType_idWorkType) {
//		this.workType_idWorkType = workType_idWorkType;
//	}

}