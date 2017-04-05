package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "WorkType" database table.
 * 
 */
@Entity
@Table(name=WorkType.WORK_TYPE)
@NamedQuery(name="WorkType.findAll", query="SELECT w FROM WorkType w")
public class WorkType implements Serializable {
	static final String WORK_TYPE = "WorkType";

	private static final long serialVersionUID = 1L;

	@Column(name="defaultPrice")
	private Double defaultPrice;

	@Column(name="details")
	private String details;

	@Id
	@Column(name="idWorkType")
	private Long idWorkType;

	@Column(name="name")
	private String name;

	public WorkType() {
	}

	public Double getDefaultPrice() {
		return this.defaultPrice;
	}

	public void setDefaultPrice(Double defaultPrice) {
		this.defaultPrice = defaultPrice;
	}

	public String getDetails() {
		return this.details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Long getIdWorkType() {
		return this.idWorkType;
	}

	public void setIdWorkType(Long idWorkType) {
		this.idWorkType = idWorkType;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}