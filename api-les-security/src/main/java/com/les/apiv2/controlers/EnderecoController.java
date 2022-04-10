package com.les.apiv2.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.les.apiv2.entities.Endereco;
import com.les.apiv2.service.EnderecoService;

@CrossOrigin
@RestController
@RequestMapping("/api/address")
public class EnderecoController {
	
	@Autowired
	private EnderecoService enderecoService;
	
	@GetMapping
	public ResponseEntity<List<Endereco>> findAll(){
		List<Endereco> list = enderecoService.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping(value = "/cadastrar")
	public ResponseEntity<Endereco> save(@RequestBody Endereco endereco){
		return new ResponseEntity<Endereco>(this.enderecoService.save(endereco),HttpStatus.CREATED);
	}
	
	@GetMapping(value = "/{idUsuario}")
	public ResponseEntity<List<Endereco>> findAllByIdUsuario(@PathVariable("idUsuario") Integer idUsuario){
		List<Endereco> list = enderecoService.findAllByIdUsuario(idUsuario);
		return ResponseEntity.ok(list);
	}
}