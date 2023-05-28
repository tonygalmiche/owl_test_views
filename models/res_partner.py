# -*- coding: utf-8 -*-

from odoo import models,fields,api


class res_partner(models.Model):
    _inherit = "res.partner"

    color  = fields.Integer("Couleur")
