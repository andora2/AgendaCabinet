package webservices;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.Customer;
import model.DummyData;
import model.Termin;

@Path( "/termine" )
@Produces( MediaType.APPLICATION_JSON )
@Consumes(MediaType.APPLICATION_JSON)
@Stateless
public class TermineWS {

	@EJB
	DummyData dummyData;
	
	@EJB
	CustomerWS custommerWS;
	
	@GET
	@Path( "/" )
	@Produces( MediaType.APPLICATION_JSON )
	public Response getAll() {
		return Response.ok(getAllTermine()).build();
	}
	
	@SuppressWarnings("unchecked")
	private List<Termin> getAllTermine() {
		/*EntityManagerFactory emf = Persistence.createEntityManagerFactory( "AgendaCabinet" );
		EntityManager em = emf.createEntityManager();
		return em.createNamedQuery("Customer.findAll").getResultList();*/
		this.dummyData.init();
		return this.dummyData.getTermine();
	}

	@GET
	@Path( "/{planned_time}" )
	@Produces( MediaType.APPLICATION_JSON )
	public Response getForCustomer(@PathParam("planedTime") Timestamp i_plannedTime ) {
		return Response.ok(getTermin(i_plannedTime)).build();
	}

	private Customer getTermin(Timestamp i_id) {
		this.dummyData.init();
		//this.dummyData.getTermine().stream().filter(arg0)
		return null;
	}	
	
}
