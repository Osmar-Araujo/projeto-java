package com.les.apiv2.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "pagamentos")
public class Pagamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Double valorPago;
	
	@OneToOne
	private Cartao cartao;
	
	@OneToOne
	private Cupom cupom;
	
	@OneToOne
	private Pedido pedido;
	
	public Pagamento(Pagamento pag) {
		
	}
	
}
