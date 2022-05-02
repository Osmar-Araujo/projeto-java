package com.les.apiv2.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
@Table(name = "orders")
public class Pedido implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date dataPedido = new Date();
	private OrderStatus status = OrderStatus.PENDENTE;
	@OneToOne
	private Endereco endereco;
	@OneToOne
	private Usuario usuario;
	@OneToOne
	private Cartao cartao;
	private Double itemsPrice;
	private Double taxPrice;
	private Double totalPrice;

	@ManyToMany
	@JoinTable(name = "order_product", joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Produto> produtos = new ArrayList<>();

	public Pedido() {

	}

	public Pedido(Integer id, OrderStatus status, Endereco endereco, Usuario usuario, Cartao cartao, Double itemsPrice, Double taxPrice, Double totalPrice) {
		super();
		this.id = id;
		this.status = status;
		this.endereco = endereco;
		this.usuario = usuario;
		this.cartao = cartao;
		this.itemsPrice = itemsPrice;
		this.taxPrice = taxPrice;
		this.totalPrice = totalPrice;
	}

}
