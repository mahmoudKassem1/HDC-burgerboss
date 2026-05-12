import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

function Cart({ cartImage }) {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 50 : 0; // Fixed delivery fee if cart isn't empty
  const total = subtotal + deliveryFee;

  return (
    <div className="home-page-fade-in py-5" style={{ backgroundColor: '#FDF8E4', minHeight: '100vh' }}>
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={7}>
            <h1 className="hero-title">Your Cart</h1>
            <p className="hero-subtitle">Premium ingredients, engineering precision, delivered to your door.</p>
          </Col>
          <Col md={5} className="text-center">
            {cartImage && <img src={cartImage} alt="Burger" className="img-fluid img-horizontal" />}
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <div className="bg-white p-4 shadow-sm rounded-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  <h4>Your cart is empty</h4>
                  <Button className="btn-boss mt-3" onClick={() => navigate('/menu')}>Explore Menu</Button>
                </div>
              ) : (
                <Table responsive borderless hover className="m-0">
                  <thead className="border-bottom">
                    <tr>
                      <th className="text-secondary py-3">Product</th>
                      <th className="text-secondary py-3 text-center">Qty</th>
                      <th className="text-secondary py-3 text-end">Price</th>
                      <th className="text-secondary py-3 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="align-middle">
                        <td className="fw-bold py-4 text-dark">{item.name}</td>
                        <td className="text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <Button variant="outline-dark" size="sm" onClick={() => updateQuantity(item.id, -1)}><Minus size={14}/></Button>
                            <span className="mx-3 fw-bold">{item.quantity}</span>
                            <Button variant="outline-dark" size="sm" onClick={() => updateQuantity(item.id, 1)}><Plus size={14}/></Button>
                          </div>
                        </td>
                        <td className="text-end fw-semibold">{(item.price * item.quantity).toFixed(2)} EGP</td>
                        <td className="text-end">
                          <Button variant="link" className="text-danger" onClick={() => removeFromCart(item.id)}>
                            <Trash2 size={18} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </Col>

          <Col lg={4}>
            <div className="bg-dark text-white p-4 rounded-4 shadow">
              <h3 className="h4 mb-4">Order Summary</h3>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-light">Subtotal</span>
                <span>{subtotal.toFixed(2)} EGP</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-light">Delivery Fee</span>
                <span>{deliveryFee.toFixed(2)} EGP</span>
              </div>
              <hr className="bg-light" />
              <div className="d-flex justify-content-between mb-4 h4 fw-bold">
                <span>Total</span>
                <span style={{ color: '#FFB300' }}>{total.toFixed(2)} EGP</span>
              </div>
              <Button className="btn-boss w-100 mb-3 py-3" disabled={cartItems.length === 0}>
                Checkout
              </Button>
              <Button variant="outline-light" className="w-100 border-0" onClick={() => navigate('/menu')}>
                ← Continue Shopping
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;