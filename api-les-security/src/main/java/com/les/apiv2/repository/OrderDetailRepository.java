package com.les.apiv2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.les.apiv2.entities.OrderDetail;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
	
	@Query(value="Select o, o.produto, o.pedido from OrderDetail o join Produto p on o.produto.id = p.id where o.id = ?1")
	public OrderDetail findOneOrderDetailWithProduto (Integer id);
	
}