package com.les.lesapi.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Entity
@Table(name="cards")
@Data
public class Cartao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer number;
	private String cardHolderName;
	private Integer cvc;
	private String bandeira;
	@DateTimeFormat(pattern = "MM/yyyy")
	private Date dueData;
	@ManyToOne
	@JoinColumn(name="id_usuario")
	private Usuario usuario; 
	
	@JsonBackReference
	public Usuario getUsuario() {
		return usuario;
	}

}
