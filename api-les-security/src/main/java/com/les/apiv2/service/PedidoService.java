package com.les.apiv2.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.les.apiv2.entities.OrderStatus;
import com.les.apiv2.entities.Pedido;
import com.les.apiv2.entities.dto.PedidoDTO;
import com.les.apiv2.repository.PedidoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository pedidoRep;
	
	
	@Transactional
	public PedidoDTO insert(PedidoDTO dto) {
	Pedido pedido = new Pedido(null, OrderStatus.PENDENTE, dto.getEndereco(), dto.getUsuario(), dto.getCartao(), dto.getTotalPrice(),dto.getTaxPrice(), dto.getOrderDetails());
		/*
		for (ProdutoDTO p : dto.getProdutos()) {
			Optional<Produto> produto = produtoRep.findById(p.getId());
			pedido.getProdutos().add(produto.get());
		}
		*/
	pedido = pedidoRep.save(pedido);
	return new PedidoDTO(pedido);
	}
	
	public Pedido findOne (Integer id) {
		Optional<Pedido> pedido = pedidoRep.findById(id);
		return pedido.get();
	}
	
	public List<Pedido> FindByUserId(Integer Id_usuario){
		return pedidoRep.findByIdUsuario(Id_usuario);
	}

	public Pedido setAprovado(Integer id) {
		Pedido pedido = pedidoRep.getById(id);
		pedido.setStatus(OrderStatus.APROVADO);
		pedido = pedidoRep.save(pedido);
		return pedido;
	}
	
	public Pedido setEnviado(Integer id) {
		Pedido pedido = pedidoRep.getById(id);
		pedido.setStatus(OrderStatus.ENVIADO);
		pedido = pedidoRep.save(pedido);
		return pedido;
	}
	
	public Pedido setEntregue(Integer id) {
		Pedido pedido = pedidoRep.getById(id);
		pedido.setStatus(OrderStatus.ENTREGUE);
		pedido = pedidoRep.save(pedido);
		return pedido;
	}
	
	public Pedido setDevolucaoPendente(Integer id) {
		Pedido pedido = pedidoRep.getById(id);
		pedido.setStatus(OrderStatus.DEVOLUCAO_PENDENTE);
		pedido = pedidoRep.save(pedido);
		return pedido;
	}
	
	public Pedido setDevolvido(Integer id) {
		Pedido pedido = pedidoRep.getById(id);
		pedido.setStatus(OrderStatus.DEVOLVIDO);
		pedido = pedidoRep.save(pedido);
		return pedido;
	}
}
