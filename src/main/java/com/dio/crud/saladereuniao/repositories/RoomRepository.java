package com.dio.crud.saladereuniao.repositories;

import com.dio.crud.saladereuniao.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
