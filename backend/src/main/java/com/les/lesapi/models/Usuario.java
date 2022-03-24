package com.les.lesapi.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Entity
@Table(name="users")
@Data
public class Usuario implements Serializable{
	

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date dtNasc;
	private String genero;
	private String cpf;
	private String tipoTel;
	private String tel;
	private String email;
	private String password;
	
	private Boolean isAdmin = false;
	
	@JsonManagedReference
	@OneToMany(cascade=CascadeType.ALL, mappedBy="usuario")
	private List <Endereco> enderecos;
	
	@JsonManagedReference
	@OneToMany(cascade=CascadeType.ALL,mappedBy="usuario")
	private List<Cartao> cartoes;
	 
}
