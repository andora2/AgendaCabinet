package model;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;


/**
 * The persistent class for the "Customer" database table.
 * 
 */
@Entity
@Table(name=Customer.CUSTOMER)
@NamedQuery(name="Customer.findAll", query="SELECT c FROM Customer c")
public class Customer implements Serializable {
	static final String CUSTOMER = "acprod.Customer";

	private static final long serialVersionUID = 1L;

	private String cnp;

	@Column(name="\"createTime\"")
	private Timestamp createTime;

	@Column(name="\"familyName\"")
	private String familyName;

	@Id
	@Column(name="\"idCustomer\"")
	private Long idCustomer;

	@Column(name="\"mail\"")
	private String mail;

	@Column(name="\"mobil\"")
	private String mobil;

	@Column(name="\"name\"")
	private String name;

	@Column(name="\"tel\"")
	private String tel;

	//bi-directional many-to-one association to Offer
	@OneToMany(mappedBy="customer")
	private List<Offer> offers;

	//bi-directional many-to-one association to Offer
	@OneToMany(mappedBy="customer")
	private List<Termin> termins;
	
	public Customer() {
	}

	public String getCnp() {
		return this.cnp;
	}

	public void setCnp(String cnp) {
		this.cnp = cnp;
	}

	public Timestamp getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}

	public String getFamilyName() {
		return this.familyName;
	}

	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}

	public Long getIdCustomer() {
		return this.idCustomer;
	}

	public void setIdCustomer(Long idCustomer) {
		this.idCustomer = idCustomer;
	}

	public String getMail() {
		return this.mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getMobil() {
		return this.mobil;
	}

	public void setMobil(String mobil) {
		this.mobil = mobil;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTel() {
		return this.tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public List<Offer> getOffers() {
		return this.offers;
	}

	public void setOffers(List<Offer> offers) {
		this.offers = offers;
	}

	public Offer addOffers(Offer offers) {
		getOffers().add(offers);
		offers.setCustomer(this);

		return offers;
	}

	public Offer removeOffers(Offer offers) {
		getOffers().remove(offers);
		offers.setCustomer(null);

		return offers;
	}

	public List<Termin> getTermins() {
		return this.termins;
	}

	public void setTermins(List<Termin> termins) {
		this.termins = termins;
	}

	public Termin addTermins(Termin termins) {
		getTermins().add(termins);
		termins.setCustomer(this);

		return termins;
	}

	public Termin removeTermins(Termin termins) {
		getTermins().remove(termins);
		termins.setCustomer(null);

		return termins;
	}
	
}