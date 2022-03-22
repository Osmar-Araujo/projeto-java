package com.les.lesapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.les.lesapi.models.Usuario;
import com.les.lesapi.services.UsuarioService;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> findAll(){
		List<Usuario> list = usuarioService.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping(value = "/register")
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario){
	 Usuario usu = usuarioService.save(usuario);
	 return ResponseEntity.ok(usu);
	}
}