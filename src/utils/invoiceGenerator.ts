import jsPDF from 'jspdf';
import { Order } from '../types';

export const generateInvoice = (order: Order) => {
    const doc = new jsPDF();
    const lineHeight = 7;
    let y = 20;

    // Header
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text('Feduzzi Mercato Italiano', 20, y);
    y += 10;

    doc.setFontSize(10);
    doc.text('Scheldestraat 63', 20, y);
    y += 5;
    doc.text('1072 GG Amsterdam', 20, y);
    y += 15;

    // Invoice Title
    doc.setFontSize(16);
    doc.text(`FACTUUR`, 20, y);
    y += 10;

    // Invoice Details
    doc.setFontSize(10);
    doc.text(`Factuurnummer: ${order.id.substring(0, 8).toUpperCase()}`, 20, y);
    doc.text(`Datum: ${new Date(order.date).toLocaleDateString('nl-NL')}`, 120, y);
    y += 10;

    // Customer Details
    doc.text('Klantgegevens:', 20, y);
    y += 5;
    doc.text(`${order.customer.firstName} ${order.customer.lastName}`, 20, y);
    if (order.customer.companyName) {
        y += 5;
        doc.text(order.customer.companyName, 20, y);
    }
    y += 5;
    doc.text(`${order.customer.address}`, 20, y);
    y += 5;
    doc.text(`${order.customer.zipCode} ${order.customer.city}`, 20, y);
    y += 5;
    doc.text(order.customer.email, 20, y);

    if (order.customer.vatNumber) {
        y += 5;
        doc.text(`BTW: ${order.customer.vatNumber}`, 20, y);
    }
    if (order.customer.kvkNumber) {
        y += 5;
        doc.text(`KVK: ${order.customer.kvkNumber}`, 20, y);
    }

    y += 15;

    // Table Header
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 190, y);
    y += 5;
    doc.setFont(undefined, 'bold');
    doc.text('Omschrijving', 20, y);
    doc.text('Aantal', 130, y);
    doc.text('Prijs', 150, y);
    doc.text('Totaal', 170, y);
    doc.setFont(undefined, 'normal');
    y += 3;
    doc.line(20, y, 190, y);
    y += 8;

    // Items
    order.items.forEach((item) => {
        doc.text(item.name, 20, y);
        doc.text(item.quantity.toString(), 135, y, { align: 'right' });
        doc.text(`€ ${item.price.toFixed(2)}`, 160, y, { align: 'right' });
        doc.text(`€ ${(item.price * item.quantity).toFixed(2)}`, 185, y, { align: 'right' });
        y += 7;
    });

    y += 5;
    doc.line(20, y, 190, y);
    y += 10;

    // Totals
    doc.setFont(undefined, 'bold');
    doc.text(`Totaal (incl. BTW):`, 130, y);
    doc.text(`€ ${order.total.toFixed(2)}`, 185, y, { align: 'right' });

    // Save
    doc.save(`Factuur_Feduzzi_${order.id.substring(0, 8)}.pdf`);
};
