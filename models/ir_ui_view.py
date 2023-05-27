from odoo import fields, models


class View(models.Model):
    _inherit = "ir.ui.view"

    type = fields.Selection(selection_add=[("owl_test", "Test Vue OWL"),("owl_graph", "Test Vue OWL Graph")])
    #type = fields.Selection(selection_add=[("owl_graph", "Test Vue OWL Graph")])
