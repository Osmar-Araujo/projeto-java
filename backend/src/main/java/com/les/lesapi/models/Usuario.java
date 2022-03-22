package com.les.lesapi.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Entity
@Table(name="users")
@Data
public class Usuario {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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
	
}
