package com.les.apiv2.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
@Entity
@Table(name="orders")
public class Pedido implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date dataPedidoDate = new Date();
	@OneToOne
	private Endereco endereco;
	@OneToOne
	private Usuario usuario;
	@OneToOne
	private Cartao cartao;
	private OrderStatus status = OrderStatus.PENDENTE;
	
	@ManyToMany
	@JoinTable(name="order_product", 
	joinColumns = @JoinColumn(name="order_id"),
	inverseJoinColumns = @JoinColumn(name="product_id"))
	private Set<Produto> produtos = new HashSet<>();
}
