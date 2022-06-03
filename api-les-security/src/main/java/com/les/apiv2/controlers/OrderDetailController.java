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

import com.les.apiv2.entities.OrderDetail;
import com.les.apiv2.service.OrderDetailService;

@CrossOrigin
@RestController
@RequestMapping("/api/orderDetails")
public class OrderDetailController {
	
	@Autowired
	private OrderDetailService service;
	
	@PostMapping(value = "/cadastrar", produces = "application/json")
	public ResponseEntity<OrderDetail> save(@RequestBody OrderDetail orderDetail){
		return new ResponseEntity<OrderDetail>(this.service.save(orderDetail),HttpStatus.CREATED);
	}
	
	@GetMapping(value = "/graph")
	public ResponseEntity<List<OrderDetail>> graph(){
		List<OrderDetail> od = service.graph();
		return ResponseEntity.ok(od);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<OrderDetail> findOne(@PathVariable("id") Integer id){
		OrderDetail od = service.findOne(id);
		return ResponseEntity.ok(od);
	}
	
}