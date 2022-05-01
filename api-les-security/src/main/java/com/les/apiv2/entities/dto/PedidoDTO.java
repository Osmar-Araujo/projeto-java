package com.les.apiv2.entities.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.format.annotation.DateTimeFormat;

import com.les.apiv2.entities.Cartao;
import com.les.apiv2.entities.Endereco;
import com.les.apiv2.entities.OrderStatus;
import com.les.apiv2.entities.Pedido;
import com.les.apiv2.entities.Produto;
import com.les.apiv2.entities.Usuario;

import lombok.Data;

@Data
public class PedidoDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date dataPedidoDate;
	private Endereco endereco;
	private Usuario usuario;
	private Cartao cartao;
	private OrderStatus status;
	private List<Produto> produtos = new ArrayList<>();
	
	public PedidoDTO (Pedido pedido) {
		id = pedido.getId();
		dataPedidoDate = pedido.getDataPedidoDate();
		endereco = pedido.getEndereco();
		usuario = pedido.getUsuario();
		cartao = pedido.getCartao();
		status = pedido.getStatus();
		produtos = pedido.getProdutos().stream().map(p -> new Produto()).collect(Collectors.toList());
	}
}
