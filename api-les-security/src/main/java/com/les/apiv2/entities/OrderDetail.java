package com.les.apiv2.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Data
@Entity
@Table(name = "order_details")
public class OrderDetail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name ="produto_id")
	private Produto produto;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name ="pedido_id")
	private Pedido pedido;
	
	private Long quantity;
	
	public OrderDetail() {
		
	}

	public OrderDetail(Integer id, Produto produto, Pedido pedido, Long quantity) {
		this.id = id;
		this.produto = produto;
		this.pedido = pedido;
		this.quantity = quantity;
	}
	
	@JsonBackReference
	public Produto getProduto() {
		return produto;
	}
	
	@JsonBackReference
	public Pedido getPedido() {
		return pedido;
	}
}