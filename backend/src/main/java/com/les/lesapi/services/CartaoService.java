package com.les.lesapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.les.lesapi.models.Cartao;
import com.les.lesapi.repositories.CartaoRepository;

@Service
public class CartaoService {
	
	@Autowired
	private CartaoRepository cartaoRepository;

	public List<Cartao> findAll(){
		List<Cartao> list = cartaoRepository.findAll();
		return list;
	}
	
	public Cartao save (Cartao cartao) {
		return cartaoRepository.save(cartao);
		
	}
	
	public List<Cartao> findAllByIdUsuario(Integer IdUsuario){
		return cartaoRepository.findAllByIdUsuario(IdUsuario);
	}
	
}
