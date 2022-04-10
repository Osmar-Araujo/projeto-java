package com.les.apiv2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.les.apiv2.entities.Produto;
import com.les.apiv2.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	
	public List<Produto> findAll(){
		List<Produto> list = produtoRepository.findAll();
		return list;
	}
	
	public Produto save(Produto produto) {
		return produtoRepository.save(produto);
	}
	
	public Produto findOne(Integer id) {
		Optional<Produto> prod = produtoRepository.findById(id);
		return prod.get();
	
	}
}