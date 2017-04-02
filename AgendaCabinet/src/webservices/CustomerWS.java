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

@Path( "/customer" )
@Produces( MediaType.APPLICATION_JSON )
@Consumes(MediaType.APPLICATION_JSON)
@Stateless
public class CustomerWS {

	@EJB
	DummyData dummyData;
	
	@GET
	@Path( "/" )
	@Produces( MediaType.APPLICATION_JSON )
	public Response getAll() {
		return Response.ok(getAllCustommers()).build();
	}
	
	@SuppressWarnings("unchecked")
	private List<Customer> getAllCustommers() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory( "AgendaCabinet" );
		EntityManager em = emf.createEntityManager();
		return em.createNamedQuery("Customer.findAll").getResultList();
		//return this.dummyData.getCustomers();
	}

	@GET
	@Path( "/{id}" )
	@Produces( MediaType.APPLICATION_JSON )
	public Response get(@PathParam("id") long i_id ) {
		return Response.ok(getCustomer(Long.valueOf(i_id))).build();
	}

	private Customer getCustomer(Long i_id) {
		// TODO Auto-generated method stub
		return null;
	}	
	
}
