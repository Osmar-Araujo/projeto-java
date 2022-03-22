package com.les.lesapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.les.lesapi.models.Produto;
import com.les.lesapi.services.ProdutoService;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	

	@GetMapping
	public ResponseEntity<List<Produto>> findAll(){
		List<Produto> list = produtoService.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<Produto> save(@RequestBody Produto produto){
	 Produto prod = produtoService.save(produto);
	 return ResponseEntity.ok(prod);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Produto> findOne(@PathVariable("id") Integer id){
		Produto prod = produtoService.findOne(id);
		return ResponseEntity.ok(prod);
	}

}
