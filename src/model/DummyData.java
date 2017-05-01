package model;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ejb.Singleton;

@Singleton
public class DummyData {
	List<Customer> customers;
	List<WorkType> worktypes;
	List<Offer> offers;
	List<Termin> termine;

	private void createCustomers() {
		List<Termin> termine = getTermine();
		List<Offer> offers = getOffers();
		
		Customer newCustomer = new Customer();
		newCustomer.setIdCustomer(1L);
		newCustomer.setCnp("CNP12887349");
		newCustomer.setCreateTime(Timestamp.from(Instant.now()));
		newCustomer.setFamilyName("Muresaru");
		newCustomer.setMail("info@mresaru.ro");
		newCustomer.setMobil("017165401876");
		newCustomer.setName("Jon");
		newCustomer.setTel("");
		Termin termin = termine.get(0);
		//TODO newCustomer.setTermins(new ArrayList<Termin>());
		//TODO newCustomer.addTermins(termin);
		Offer offer = offers.get(0);
		//TODO newCustomer.setOffers(new ArrayList<Offer>());
		//TODO newCustomer.addOffers(offer);
		//TODO termin.setOffer_idOffer(offer.getIdOffer());
		
		this.customers = new ArrayList<Customer>();
		this.customers.add(newCustomer);
		
		newCustomer = new Customer();
		newCustomer.setIdCustomer(2L);
		newCustomer.setCnp("CNP2134t134");
		newCustomer.setCreateTime(Timestamp.from(Instant.now()));
		newCustomer.setFamilyName("Todorescu");
		newCustomer.setMail("info@tidorescu.ro");
		newCustomer.setMobil("01537868239");
		newCustomer.setName("Andrei");
		newCustomer.setTel("0457687980");

		termin = termine.get(1);
		//TODO newCustomer.setTermins(new ArrayList<Termin>());
		//TODO newCustomer.addTermins(termin);
		//TODO newCustomer.setOffers(new ArrayList<Offer>());
		offer = offers.get(1);
		//TODO newCustomer.addOffers(offer);
		//TODO termin.setOffer_idOffer(offer.getIdOffer());

		this.customers.add(newCustomer);
	}

	public List<Customer> getCustomers() {
		if(customers == null){
			createCustomers();
		}
		return customers;
	}

	public List<Offer> getOffers() {
		if(customers == null){
			createOffers();
		}
		return offers;
	}

	private void createOffers() {
		Offer newOffer = new Offer();
		newOffer.setIdOffer(1L);
		newOffer.setAmount(750.00);
		newOffer.setCreateDate(new Date());
		newOffer.setDetails("Offerta 1 pentru lucruri frumoase");
		this.offers = new ArrayList<Offer>();
		this.offers.add(newOffer);
		
		newOffer = new Offer();
		newOffer.setIdOffer(1L);
		newOffer.setAmount(750.00);
		newOffer.setCreateDate(new Date());
		newOffer.setDetails("Offerta 1 pentru lucruri frumoase");
		this.offers.add(newOffer);
	}
	

	public List<WorkType> getWorkTypes() {
		if(worktypes == null){
			createWorkType();
		}
		return worktypes;
	}

	private void createWorkType() {
		WorkType newWorkType = new WorkType();
		newWorkType.setIdWorkType(1L);
		newWorkType.setName("Lucru Manual 1");
		newWorkType.setDefaultPrice(10.00);
		newWorkType.setDetails("Si mai mult dar tot details");
		this.worktypes = new ArrayList<WorkType>();
		this.worktypes.add(newWorkType);
		
		newWorkType = new WorkType();
		newWorkType.setIdWorkType(2L);
		newWorkType.setDefaultPrice(40.00);
		newWorkType.setName("Lucru Manual 2");
		newWorkType.setDetails("Mai si una si altele de facut, details...");
		this.worktypes.add(newWorkType);
	}

	public List<Termin> getTermine() {
		if(termine == null){
			createTermine();
		}
		return termine;
	}

	private void createTermine() {
		List<WorkType> worktypes = getWorkTypes();
		
		Termin newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now().plusSeconds(5000)));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(1).getIdWorkType());
		this.termine = new ArrayList<Termin>();
		this.termine.add(newTermine);
		
		newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now().plusSeconds(3700)));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(0).getIdWorkType());
		this.termine.add(newTermine);

		newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now().plusSeconds(1500)));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(0).getIdWorkType());
		this.termine.add(newTermine);
		
		newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now().plusSeconds(800)));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(1).getIdWorkType());
		this.termine.add(newTermine);

		newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now()));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(1).getIdWorkType());
		this.termine.add(newTermine);

		newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now().minusSeconds(700)));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(0).getIdWorkType());
		this.termine.add(newTermine);

		newTermine = new Termin();
		newTermine.setPlannedTime(Timestamp.from(Instant.now().minusSeconds(2300)));
		//TODO newTermine.setWorkType_idWorkType(worktypes.get(1).getIdWorkType());
		this.termine.add(newTermine);
	}

	public void init() {
		getCustomers();
	}
	
	

}
