package com.les.apiv2.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.les.apiv2.entities.Pedido;
import com.les.apiv2.entities.Produto;
import com.les.apiv2.entities.dto.PedidoDTO;
import com.les.apiv2.repository.PedidoRepository;
import com.les.apiv2.repository.ProdutoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository pedidoRep;
	
	@Autowired
	private ProdutoRepository produtoRep;
	
	
	@Transactional
	public List<PedidoDTO> findAll(){
		List<Pedido> list = pedidoRep.findOrderWithProducts();
		return list.stream().map(order -> new PedidoDTO(order)).collect(Collectors.toList());
	}
	
	@Transactional
	public PedidoDTO insert(PedidoDTO dto) {
		Pedido pedido = new Pedido(null, dto.getDataPedido(), dto.getStatus(), dto.getEndereco(), dto.getUsuario(), dto.getCartao());
		for (Produto p : dto.getProdutos()) {
			Optional<Produto> produto = produtoRep.findById(p.getId());
			pedido.getProdutos().add(produto.get());
		}
		pedido = pedidoRep.save(pedido);
		return new PedidoDTO(pedido);
	}

}
