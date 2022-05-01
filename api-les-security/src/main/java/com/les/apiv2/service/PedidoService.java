package com.les.apiv2.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.les.apiv2.entities.Pedido;
import com.les.apiv2.entities.dto.PedidoDTO;
import com.les.apiv2.repository.PedidoRepository;
import com.les.apiv2.repository.ProdutoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository pedidoRep;
	
	@Autowired
	private ProdutoRepository produtoRep;
	
	
	public List<PedidoDTO> findAll(){
		List<Pedido> list = pedidoRep.findOrderWithProducts();
		
		return list.stream().map(order -> new PedidoDTO(order)).collect(Collectors.toList());
	}

}
