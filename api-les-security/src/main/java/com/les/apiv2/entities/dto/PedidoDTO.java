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
import com.les.apiv2.entities.Usuario;

import lombok.Data;

@Data
public class PedidoDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date dataPedido;
	private OrderStatus status;
	private Endereco endereco;
	private Usuario usuario;
	private Cartao cartao;
	private List<ProdutoDTO> produtos = new ArrayList<>();
	
	public PedidoDTO() {
		
	}
	
	public PedidoDTO (Pedido pedido) {
		id = pedido.getId();
		dataPedido = pedido.getDataPedido();
		endereco = pedido.getEndereco();
		usuario = pedido.getUsuario();
		cartao = pedido.getCartao();
		status = pedido.getStatus();
		produtos = pedido.getProdutos().stream().map(p -> new ProdutoDTO(p)).collect(Collectors.toList());
	}
}
